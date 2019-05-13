package kr.co.mantech.accordion.kubernetes;

import java.util.List;
import java.util.concurrent.ExecutorService;

import io.fabric8.kubernetes.api.model.Pod;
import io.fabric8.kubernetes.client.Callback;
import io.fabric8.kubernetes.client.KubernetesClient;
import io.fabric8.kubernetes.client.dsl.ExecWatch;
import io.fabric8.kubernetes.client.utils.InputStreamPumper;
import kr.co.mantech.accordion.config.Kubernetes;

import java.util.concurrent.Executors;

public class DeleteRegistry extends ApiBase{
	private String registryName = "";
	
	public void setRegistryName(String registryName) {
		this.registryName = registryName;
	}
	
	private static class SystemOutCallback implements Callback<byte[]> {
        @Override
        public void call(byte[] data) {
            //System.out.print(new String(data));
        }
    }

	public DeleteRegistry() {
	}

	public DeleteRegistry(Kubernetes config) {
		super(config);
	}
	
	@Override
	protected int result(KubernetesClient kubernetesClient) {
		int result = FAIL;
			
		String podName = null; 
			
    	List<Pod> pods = kubernetesClient.pods().inNamespace("accordion").list().getItems();
    		
    	for(int i = 0; i< pods.size(); ++i) {
    		Pod item  = pods.get(i);
    			
    		if (item.getMetadata().getName().indexOf("registry") > -1)
    		{
    			podName = item.getMetadata().getName();
    			break;
    		}
    	}
    		
    	if(podName != null) {
            ExecutorService executorService = Executors.newSingleThreadExecutor();
            try 
            (
            		ExecWatch watch = kubernetesClient.pods().inNamespace("accordion").withName(podName).inContainer("registry")
                            .redirectingInput()
                            .redirectingOutput()
                            .exec();
                    InputStreamPumper pump = new InputStreamPumper(watch.getOutput(), new SystemOutCallback()))
            		{
                		executorService.submit(pump);
                		String cmd = "rm -rf /var/lib/registry/docker/registry/v2/repositories/" + registryName + "\n";
                		watch.getInput().write(cmd.getBytes());

                		Thread.sleep(20 * 1000);
                		result = OK;
            } catch (Exception e) {
            	result = FAIL;
            } finally {
                executorService.shutdownNow();
            }
    	}
	        
	    return result;
	}
}
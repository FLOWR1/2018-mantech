package kr.co.mantech.accordion.kubernetes;

import java.util.List;
import java.util.concurrent.ExecutorService;

import io.fabric8.kubernetes.api.model.Pod;
import io.fabric8.kubernetes.client.Callback;
import io.fabric8.kubernetes.client.Config;
import io.fabric8.kubernetes.client.ConfigBuilder;
import io.fabric8.kubernetes.client.DefaultKubernetesClient;
import io.fabric8.kubernetes.client.KubernetesClient;
import io.fabric8.kubernetes.client.KubernetesClientException;
import io.fabric8.kubernetes.client.dsl.ExecListener;
import io.fabric8.kubernetes.client.dsl.ExecWatch;
import io.fabric8.kubernetes.client.utils.InputStreamPumper;
import kr.co.mantech.accordion.config.Kubernetes;
import okhttp3.Response;


import java.io.IOException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class RunRegistryGC extends ApiBase{
	
    private static class SystemOutCallback implements Callback<byte[]> {
        @Override
        public void call(byte[] data) {
            System.out.print(new String(data));
        }
    }

		public RunRegistryGC()
		{
			
		}

		public RunRegistryGC(Kubernetes config)
		{
			super(config);
			
		}
	
		@Override
		protected int result(KubernetesClient kubernetesClient)
		{
			
			int result = FAIL;
			
			String podName = null; 
			
    		List<Pod> pods = kubernetesClient.pods().inNamespace("accordion").list().getItems();
    		
    		for (int i = 0; i< pods.size(); ++i)
    		{
    			Pod item  = pods.get(i);
    			
    			if (item.getMetadata().getName().indexOf("registry") > -1)
    			{
    				podName = item.getMetadata().getName();
    				break;
    			}
    		}
    		
    		
    		if (podName != null)
    		{
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
    	            		watch.getInput().write("/bin/registry garbage-collect /etc/docker/registry/config.yml\n".getBytes());
    	            		Thread.sleep(60 * 1000);
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

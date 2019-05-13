package kr.co.mantech.apm.service;

import java.net.InetSocketAddress;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import org.elasticsearch.action.ActionFuture;
import org.elasticsearch.action.search.SearchRequest;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.Client;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.TransportAddress;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.SearchHits;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.elasticsearch.transport.client.PreBuiltTransportClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 * 
 * 모니터링 Service
 * 
 * @since 2018.07.25
 */
@Service
public class MonitoringService {

	private static final Logger logger = LoggerFactory.getLogger(MonitoringService.class);
	
	private final String ELASTIC_SEARCH_IP= "localhost";
	
	private final int ELASTIC_SEARCH_PORT= 9300;
	
	/**
	 * HTTP RESPONSE CODE 모니터링 리스트 조회
	 * @param searchServiceName
	 * @param startDate
	 * @param endDate
	 * @return
	 */
	
	// http Response code
	public List<HashMap<String, Object>> getHttpResCodeList(String searchServiceName, String startDate, String endDate){
		List<HashMap<String, Object>> httpResCodeList = new ArrayList<HashMap<String, Object>>();

		HashMap<String, Object> httpResCodeMap = null;
		
		// 테스트 데이터 설정 //
		Random random = new Random();
		httpResCodeMap = new HashMap<String, Object>();
		httpResCodeMap.put("cate", 200);
		httpResCodeMap.put("value", random.nextInt(200) + 1);
		httpResCodeList.add(httpResCodeMap);
		
		httpResCodeMap = new HashMap<String, Object>();
		httpResCodeMap.put("cate", 304);
		httpResCodeMap.put("value", random.nextInt(100) + 1);
		httpResCodeList.add(httpResCodeMap);
		
		httpResCodeMap = new HashMap<String, Object>();
		httpResCodeMap.put("cate", 404);
		httpResCodeMap.put("value", random.nextInt(30) + 1);
		httpResCodeList.add(httpResCodeMap);
		// 테스트 데이터 설정 //

		logger.info("http response codes =" + httpResCodeList.toString());
		
		return httpResCodeList; 
	}
	
	// IP
	public List<HashMap<String, Object>> getIpList(String searchServiceName, String startDate, String endDate){
		List<HashMap<String, Object>> IpList = new ArrayList<HashMap<String, Object>>();

		HashMap<String, Object> IpMap = null;
		
		// 테스트 데이터 설정 //
		Random random = new Random();
		IpMap = new HashMap<String, Object>();
		IpMap.put("cate", "내 IP");
		IpMap.put("value", random.nextInt(500) + 1);
		IpList.add(IpMap);
		
		IpMap = new HashMap<String, Object>();
		IpMap.put("cate", "외부 IP");
		IpMap.put("value", random.nextInt(150) + 1);
		IpList.add(IpMap);
		// 테스트 데이터 설정 //

		logger.info("Ip List =" + IpList.toString());
		
		return IpList; 
	}
	
	// Xlog
	public List<HashMap<String, Object>> getlogList(String searchServiceName, String startDate, String endDate){
		List<HashMap<String, Object>> logList = new ArrayList<HashMap<String, Object>>();

		HashMap<String, Object> logMap = null;
		
		// 테스트 데이터 설정 //
		Random random = new Random();
		logMap = new HashMap<String, Object>();
		logMap.put("cate", "log1");
		logMap.put("value", random.nextInt(40) + 1);
		logList.add(logMap);
		
		logMap = new HashMap<String, Object>();
		logMap.put("cate", "log2");
		logMap.put("value", random.nextInt(89) + 1);
		logList.add(logMap);
		
		logMap = new HashMap<String, Object>();
		logMap.put("cate", "log3");
		logMap.put("value", random.nextInt(7) + 1);
		logList.add(logMap);
		
		logMap = new HashMap<String, Object>();
		logMap.put("cate", "log4");
		logMap.put("value", random.nextInt(63) + 1);
		logList.add(logMap);
		// 테스트 데이터 설정 //

		logger.info("log List =" + logList.toString());
		
		return logList; 
	}
	
	// Error rate
	public List<HashMap<String, Object>> geterrorList(String searchServiceName, String startDate, String endDate){
		List<HashMap<String, Object>> errorList = new ArrayList<HashMap<String, Object>>();

		HashMap<String, Object> errorMap = null;
		
		// 테스트 데이터 설정 //
		Random random = new Random();
		errorMap = new HashMap<String, Object>();
		errorMap.put("cate", "Python");
		errorMap.put("value", random.nextInt(54) + 1);
		errorList.add(errorMap);
		
		errorMap = new HashMap<String, Object>();
		errorMap.put("cate", "C++");
		errorMap.put("value", random.nextInt(15) + 1);
		errorList.add(errorMap);
		
		errorMap = new HashMap<String, Object>();
		errorMap.put("cate", "C");
		errorMap.put("value", random.nextInt(100) + 1);
		errorList.add(errorMap);
		
		errorMap = new HashMap<String, Object>();
		errorMap.put("cate", "JAVA");
		errorMap.put("value", random.nextInt(330) + 1);
		errorList.add(errorMap);
		
		errorMap = new HashMap<String, Object>();
		errorMap.put("cate", "Ruby");
		errorMap.put("value", random.nextInt(30) + 1);
		errorList.add(errorMap);
		// 테스트 데이터 설정 //

		logger.info("error List =" + errorList.toString());
		
		return errorList; 
	}
	
	// Requsted page
	public List<HashMap<String, Object>> getpageList(String searchServiceName, String startDate, String endDate){
		List<HashMap<String, Object>> pageList = new ArrayList<HashMap<String, Object>>();

		HashMap<String, Object> pageMap = null;
		
		// 테스트 데이터 설정 //
		Random random = new Random();
		pageMap = new HashMap<String, Object>();
		pageMap.put("cate", "ListUser");
		pageMap.put("value", random.nextInt(500) + 1);
		pageList.add(pageMap);
		
		pageMap = new HashMap<String, Object>();
		pageMap.put("cate", "AddUser");
		pageMap.put("value", random.nextInt(100) + 1);
		pageList.add(pageMap);
		
		pageMap = new HashMap<String, Object>();
		pageMap.put("cate", "EditUser");
		pageMap.put("value", random.nextInt(300) + 1);
		pageList.add(pageMap);		
		// 테스트 데이터 설정 //

		logger.info("page List =" + pageList.toString());
		
		return pageList; 
	}
	
	/**
	 * 서비스 명 목록 조회
	 * @return
	 */
	public List<String> getServiceList(){
		return null;
	}
}

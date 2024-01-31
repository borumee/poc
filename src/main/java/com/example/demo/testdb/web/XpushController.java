package com.example.demo.testdb.web;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.spring.core.NexacroException;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.nexacro.xpush.api.PushMessageProvider;
import com.nexacro.xpush.api.PushResponse;
import com.nexacro.xpush.fw.io.ConnectionClosedException;
import com.nexacro.xpush.fw.service.provider.LoginFailException;
import com.nexacro.xpush.fw.service.provider.PushMessage;
import com.nexacro.xpush.message.Constants;

@Controller
@RequestMapping("/xpush")
public class XpushController {
	private static final Logger logger = LoggerFactory.getLogger(XpushController.class);

	@Value("${xpush.server.ip}")
	private String XPUSH_SERVER_IP;

	@Value("${xpush.provider.port}")
	private int XPUSH_PORT;

	private final String XPUSH_ID = "tobesoft";
	private final String XPUSH_PASSWORD = "xpush"; // X-PUSH server address
	private final String XPUSH_PROJECT_ID = "PRO#1";

	@RequestMapping(value = "/sendMessage")
	public NexacroResult save(@ParamDataSet(name = "input") List<Map<String, Object>> msgList) throws NexacroException {

		NexacroResult result = new NexacroResult();

		int error_code = 0;
		String error_msg = "START";

		try {
			PushMessageProvider pushMessageProvider = new PushMessageProvider();
			try {
				/*
				 * CONNETC X-PUSH
				 */
				pushMessageProvider.connect(XPUSH_SERVER_IP, XPUSH_PORT, XPUSH_PROJECT_ID, XPUSH_PASSWORD);

				/*
				 * SET MEESAGE FORMAT
				 */

				String topic_type = String.valueOf(msgList.get(0).get("topic_type"));
				String topic_id = String.valueOf(msgList.get(0).get("topic_id"));
				String title = String.valueOf(msgList.get(0).get("title"));
				String content = String.valueOf(msgList.get(0).get("content"));
				String sender = String.valueOf(msgList.get(0).get("sender"));
				String reg_time = String.valueOf(msgList.get(0).get("reg_time"));

				System.out.println("topic_type >> " + topic_type + "\n"//
						+ "topic_id >> " + topic_id + "\n"//
						+ "title    >> " + title + "\n"//
						+ "content  >> " + content + "\n"//
						+ "sender   >> " + sender + "\n"//
						+ "reg_time >> " + reg_time + "\n"//
				);

				PushMessage pushMessage = new PushMessage();
				pushMessage.setActionType(Constants.ACTION_PUSH_STRING);
				pushMessage.setCharsetName("utf-8");
				pushMessage.setProjectID(XPUSH_PROJECT_ID);
				pushMessage.setTopicType(topic_type);
				pushMessage.setTopicId(topic_id);
				pushMessage.addData(title);
				pushMessage.addData(content);
				pushMessage.addData(sender);
				pushMessage.addData(reg_time);

				/*
				 * SEND PUSH MESSAGE
				 */
				PushResponse pushResponse = pushMessageProvider.sendPushMessage(pushMessage);
				pushMessageProvider.close();

			} catch (IOException e) {
				e.printStackTrace();
			} catch (LoginFailException e) {
				e.printStackTrace();
			} catch (ConnectionClosedException e) {
				e.printStackTrace();
			}

			error_code = 0;
			error_msg = "SUCC";

		} catch (Throwable throwable) {
			error_code = -1;
			error_msg = throwable.getMessage();
		}

		result.addVariable("ErrorCode", error_code);
		result.addVariable("ErrorMsg", error_msg);
		return result;
	}

}

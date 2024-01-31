package com.example.demo.common.crypto;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Map;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

import org.springframework.util.Base64Utils;

import com.example.demo.testdb.model.Customer;

public class CryptoAES {
	private static final String algorithm = "AES/CBC/NoPadding";
	//private static final String algorithm = "AES/CBC/PKCS5Padding";

	private static final byte[] keyValue = "TOBESOFT12345678".getBytes();
	private static final byte[] ivValue = "1234567812345678".getBytes();

	private static final IvParameterSpec ivspec = new IvParameterSpec(ivValue);
	private static final SecretKeySpec keyspec = new SecretKeySpec(keyValue, "AES");

	final private static char[] hexArray = "0123456789ABCDEF".toCharArray();

	public static Object encryptObj(Object obj) throws Exception {
		Cipher c = Cipher.getInstance(algorithm);
		c.init(Cipher.ENCRYPT_MODE, keyspec, ivspec);
		Class<? extends Object> cls = obj.getClass();
		Object newObj = cls.newInstance();
		
		Method[] arrayPiMethod = cls.getDeclaredMethods();

		// ================= setter 실행.
		for (Method methodPi : arrayPiMethod) {
			String methodName = methodPi.getName();

			try {
				if (methodName.startsWith("set")) {
					String fieldName = methodName.substring(3);
					fieldName = fieldName.substring(0, 1).toLowerCase() + fieldName.substring(1);
					Field field = cls.getDeclaredField(fieldName);
					field.setAccessible(true);
					Object fieldValue = field.get(obj);

					Class[] paramObj = methodPi.getParameterTypes();
					Object callParameter = null;
					if (paramObj[0] == String.class) {
						callParameter = encrypt(padString(fieldValue.toString()));
					} else if (paramObj[0] == int.class) {
						callParameter = fieldValue;
					}

					methodPi.invoke(newObj, new Object[] { callParameter });
				}
			} catch (IllegalArgumentException | IllegalAccessException | InvocationTargetException e) {
				e.printStackTrace();
			}
		}

		return newObj;
	}

	public static Map<String, Object> encryptMap(Map<String, Object> dataMap) throws Exception {
		dataMap.forEach((key, val) -> {
			try {
				dataMap.put(key, encrypt(padString((String) val)));
			} catch (Exception e) {
				e.printStackTrace();
			}
		});

		return dataMap;
	}

	public static String encrypt(String Data) throws Exception {
		Cipher c = Cipher.getInstance(algorithm);
		c.init(Cipher.ENCRYPT_MODE, keyspec, ivspec);
		byte[] encVal = c.doFinal(Data.getBytes());
		String encryptedValue = Base64Utils.encodeToString(encVal);
		// new BASE64Encoder().encode(encVal);
		return encryptedValue;
	}

	public static String decrypt(String encryptedData) throws Exception {
		Cipher c = Cipher.getInstance(algorithm);
		c.init(Cipher.DECRYPT_MODE, keyspec, ivspec);
		byte[] decordedValue = Base64Utils.decodeFromString(encryptedData);
		// new BASE64Decoder().decodeBuffer(encryptedData);
		byte[] decValue = c.doFinal(decordedValue);
		String decryptedValue = new String(decValue);
		return decryptedValue;
	}

	public static String bytesToHex(byte[] bytes) {
		char[] hexChars = new char[bytes.length * 2];
		int v;
		for (int j = 0; j < bytes.length; j++) {
			v = bytes[j] & 0xFF;
			hexChars[j * 2] = hexArray[v >>> 4];
			hexChars[j * 2 + 1] = hexArray[v & 0x0F];
		}
		return new String(hexChars);
	}

	public static String padString(String source) {
		char paddingChar = ' ';
		int size = 16;
		int x = source.length() % size;
		int padLength = size - x;

		for (int i = 0; i < padLength; i++) {
			source += paddingChar;
		}
		return source;
	}

}

# 23_POC_FubonHyundai_GA

## POC 프로젝트 정보
- NEXACRO
  - version       : 21.0.0.1410(2023.3.27.1) (넥사크로스튜디오 Git 연동시 비정상종료 PrePatch 버전)
  - generate path : 23_POC_FubonHyundai_GA\src\main\resources\static\ui
  - Base Lib      : 23_POC_FubonHyundai_GA\NEXACRO\FubonHyundai\nexacrolib
- Java
  - version 1.8
- Spring Boot
  - version 2.6.3


## POC 요건자료 & 발표자료
- :open_file_folder: NEXACRO\doc : [PoC 항목 체크리스트.xlsx](https://raw.githubusercontent.com/tobesoft-presales/23_POC_FubonHyundai_GA/main/NEXACRO/doc/PoC%20%ED%95%AD%EB%AA%A9%20%EC%B2%B4%ED%81%AC%EB%A6%AC%EC%8A%A4%ED%8A%B8.xlsx?token=GHSAT0AAAAAAB47USPP3KY4KD336R2YHUSEZDO3OTA)
- :open_file_folder: NEXACRO\doc : [[투비소프트] 푸본현대생명_New GA 시스템 구축을 위한 UI 솔루션 PoC 결과(발표본).pptx](https://raw.githubusercontent.com/tobesoft-presales/23_POC_FubonHyundai_GA/main/NEXACRO/doc/%5B%ED%88%AC%EB%B9%84%EC%86%8C%ED%94%84%ED%8A%B8%5D%20%ED%91%B8%EB%B3%B8%ED%98%84%EB%8C%80%EC%83%9D%EB%AA%85_New%20GA%20%EC%8B%9C%EC%8A%A4%ED%85%9C%20%EA%B5%AC%EC%B6%95%EC%9D%84%20%EC%9C%84%ED%95%9C%20UI%20%EC%86%94%EB%A3%A8%EC%85%98%20PoC%20%EA%B2%B0%EA%B3%BC(%EB%B0%9C%ED%91%9C%EB%B3%B8).pptx?token=GHSAT0AAAAAAB47USPODMQ6LSRB5Y5G3EY4ZDO3PSQ)


## POC 주요 화면 [http://20.41.97.202/Fubon-GA/ui/index.html](http://20.41.97.202/Fubon-GA/ui/index.html)
<details>
  <summary>펼쳐보기</summary>
 
#### 로그인화면
 ![image](https://github.com/tobesoft-presales/23_POC_FubonHyundai_GA/assets/53424490/89173b44-d6f7-41b1-9581-a4c2d7fa5fd6)
 ![image](https://github.com/tobesoft-presales/23_POC_FubonHyundai_GA/assets/53424490/6c948f78-4812-4743-8402-ca28cf03d98f)
 ![image](https://github.com/tobesoft-presales/23_POC_FubonHyundai_GA/assets/53424490/2a579c96-5009-47c8-953f-39a890070968)

#### 메인화면
 ![image](https://github.com/tobesoft-presales/23_POC_FubonHyundai_GA/assets/53424490/b7d22fc5-6cb4-4a82-a377-bf071f12c0df)
 ![image](https://github.com/tobesoft-presales/23_POC_FubonHyundai_GA/assets/53424490/e086b3a5-60b0-4803-bde6-6424a4c9f9c2)
 ![image](https://github.com/tobesoft-presales/23_POC_FubonHyundai_GA/assets/53424490/9b4bf7b4-b07c-4b45-86a4-04693987cdd0)

#### poc1 고객정보통합조회
 ![image](https://github.com/tobesoft-presales/23_POC_FubonHyundai_GA/assets/53424490/d4de9629-e958-4233-84df-747d358f65ad)
 ![image](https://github.com/tobesoft-presales/23_POC_FubonHyundai_GA/assets/53424490/2cb5e92e-5e19-45e2-a29e-898e7b09570a)
 ![image](https://github.com/tobesoft-presales/23_POC_FubonHyundai_GA/assets/53424490/851b30f9-6a0d-4334-8c0d-ea51e54e9fe8)

#### 멀티테마
 ![image](https://github.com/tobesoft-presales/23_POC_FubonHyundai_GA/assets/53424490/b7d22fc5-6cb4-4a82-a377-bf071f12c0df)
 ![image](https://github.com/tobesoft-presales/23_POC_FubonHyundai_GA/assets/53424490/ac0f8068-ed8c-424a-a311-69677b781bd3)

#### 다국어
 ![image](https://github.com/tobesoft-presales/23_POC_FubonHyundai_GA/assets/53424490/30200fa1-759e-4676-92da-bf90423dee62)

#### Miplatform 연동
 ![image](https://github.com/tobesoft-presales/23_POC_FubonHyundai_GA/assets/53424490/df0ab94c-1513-4614-848a-d1f3ec5245b2)

</details>

## 기능샘플 리스트
|기능요건|샘플파일|설명|
|:---|:---|:---|
|다국어 지원|sample/i18n.xfdl|단순 화면 샘플, 어플리케이션 전 영역에 작업 필요|
|JSON 형태 통신전문구성|sample/DataObject.xfdl|json 통신 화면1_상담Data, 화면1_지급Data|
|Grid 공통기능|sample/Module.xfdl|그리드 공통기능 샘플|
|Grid Excel E/I|sample/ExcelExportImport_large.xfdl|SSV excel데이터 샘플 통신 1만/5만/10만 및 엑셀 E/I 샘플|
|Grid 파일 up/down|sample/filetransfer.xfdl|데모사이트 file up/down 샘플|
|Grid 버튼형페이징|sample/DataObject.xfdl|json 공통모듈 통신 및 버튼형 페이징|
|rChart DIV 방식|sample/chartngrid_div.xfdl|rchart 단순 샘플|
|웹에디터 CKEditor4|sample/ckEditor.xfdl|CkEditor4 WebBrowser 사용 단순샘플|
|PUSH 서비스 조직별/개인별|sample/xpush.xfdl|x-push 비신뢰성 멀티캐스팅, 유니캐스팅|
|div 영역 숨기기/펼치기 + animation|sample/SrchShowHide.xfdl|
|암호화 전송|sample/crypto_AES.xfdl|암복호화 샘플, 암호화통신샘플|
|우클릭방지/클립보드제어(복사방지)|sample/prevent-copyNmouse.xfdl|


## 이슈 리스트
- comp Arrangement : 동적으로 arrange 변경시 비정상동작
  - override.js 에 엔진소스 오버라이딩해서 해결
  - Tops 등록 : RC 91176 [Component Arrange] Arrange 동적 변경 문의
- FluidLayout : 컨텐츠 wrap 시 Container 의 크기조절 불가 
  - (ref : [https://stackoverflow.com/questions/40012428/how-to-detect-css-flex-wrap-event](https://stackoverflow.com/questions/40012428/how-to-detect-css-flex-wrap-event))
  - Tops 등록 : RC 91152 [FluidLayout] flexwrap 컨텐츠 줄바꿈 후 컨테이너 전체크기
- ExcelExport/Import Object : xfdl 파일에 Excel Export/Import Ojbect를 생성하고 MDI에서 여러번 열고 닫을때 error 발생 
![image](https://github.com/tobesoft-presales/23_POC_FubonHyundai_GA/assets/53424490/c215faa0-da12-4b7a-bbb0-2f034fe30bff)
  - obj 동적생성&해제 방식으로 해결 
  - 분석결과 div 방식 MDI 사용시 openMenu에서 objDiv.show() objDiv.set_url() 순서 중요!!
  - Tops 등록 : RC 91151 [MDI div 방식] objDiv.set_url() -> objDiv.show() 순서로 업무화면 동적생성시 ExcelImportObject
- 성능관련
  - MDI 에서 업무화면 여러개 열고 닫았을때 GC 메모리 회수가 완벽하지 않음
  - rChart(DIV방식) 포함된 화면 열고 닫았을때 메모리가 회수되지 않고 오히려 증가하는 현상
  - 테스트 정보

|대상화면|0개 open|50개 open|100개 open|전체 close 후|
|:---|---:|---:|---:|---:|
|초기화면|68MB|-|-|-|-|
|poc::poc01 rChart포함|상동|342MB|616MB|694MB|
|poc::poc01 rChart미포함|상동|213MB|381MB|261MB|
|poc::poc02 10000건데이터 렌더링|상동|288MB|520MB|282MB|


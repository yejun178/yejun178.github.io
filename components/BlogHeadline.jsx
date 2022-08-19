import { Col, Row } from "antd";

export default function BlogHeadline() {
  return (
    <Row
      align="middle"
      style={{
        height: 400,
        textAlign: "center",
      }}
    >
      <Col span={24}>
        <h1
          style={{
            fontSize: 70,
            fontWeight: "bold",
          }}
        >
          Yejun's Devlog
        </h1>
        <p
          style={{
            fontSize: 24,
          }}
        >
          각종 해킹 대회에서 다뤘던 문제 WriteUp 풀이 및 각종 개발 프로젝트를 기록할 Devlog 입니다 🙂
        </p>
      </Col>
    </Row>
  );
}

import { Button, Tooltip } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Input } from "antd";
import { useState } from "react";
import { Col, Row } from "antd";

const { TextArea } = Input;

const AddTask = () => {
  const [showTextbox, setShowText] = useState(false);
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };

  return (
    <>
      <Button
        type="primary"
        size="large"
        shape="round"
        onClick={() => setShowText(!showTextbox)}
        icon={
          <FontAwesomeIcon
            style={{ marginRight: "0.5rem" }}
            icon={faPlusCircle}
          />
        }
      >
        Add
      </Button>
      <Row justify="center">
        <Col span={12} >
          <TextArea

            showCount
            size="small"
            maxLength={200}
            style={{ height: 120, marginTop: "1rem", display: (showTextbox ? "none" : "block")}}
            onChange={onChange}
          />
        </Col>
      </Row>
    </>
  );
};

export default AddTask;

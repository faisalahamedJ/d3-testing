/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const OnClickDetailModal = ({ data, setShowDetailModal, xPos, yPos }) => {
  const [img, setImg] = useState();
  useEffect(() => {
    if (data?.typ !== "parent") {
      // eslint-disable-next-line no-shadow
      import(`../../images/${data?.group_type}.svg`).then((image) => {
        setImg(image.default);
      });
    } else {
      let ty_img;
      switch (data?.type) {
        case "Job":
          ty_img = "job";
          break;
        case "CronJob":
          ty_img = " CronJob";
          break;
        case "ReplicaSet":
          ty_img = "rs";
          break;
        case "StatefulSet":
          ty_img = "sts";
          break;
        case "DaemonSet":
          ty_img = "ds";
          break;
        case "Deployment":
          ty_img = "deploy";
          break;
        default:
          ty_img = "pod";
          break;
      }
      import(`../Images/${ty_img}.png`).then((image) => {
        setImg(image.default);
      });
    }
  }, [data]);
  return (
    <div
      onClick={() => {
        setShowDetailModal(false);
      }}
    >
      <Container top={yPos / 2 - 100} left={xPos - 250}>
        <div className="containerContent">
          <>
            <div className="flex items-center px-2 py-1 select-none desc">
              <img src={img} className="w-1/5 imgContainer" alt="podIcon" />
              <p className="flex items-center w-4/5 pl-2 text-xs font-semibold header">
                {data?.typ === "parent"
                  ? `Source : ${data?.name}`
                  : `Destination Pod/Svc/Ip : ${data?.ip}`}
              </p>
            </div>
            {data?.type === "edges" && (
              <>
                <strong>To: </strong> {data?.ip}
                <br />
                <strong>Protocol: </strong> {data?.protocol}
                <br />
                <strong>Port: </strong> {data?.port}
                <br />
                <strong>Direction: </strong>{" "}
                {data?.direction?.includes("ingress") ? "ingress" : "egress"}
                <br />
              </>
            )}
            {data?.typ === "parent" && (
              <>
                <strong>Allowed Connection: </strong>{" "}
                {data?.allowed_connections}
                <br />
                <strong>Blocked Connection: </strong>{" "}
                {data?.blocked_connections}
                <br />
                <strong>Labels: </strong> {data?.labels}
                <br />
              </>
            )}
            {["parent", "child"].includes(data?.group_type) && (
              <>
                <strong>Pod: </strong> {data?.pod_name}
                <br />
              </>
            )}
            <strong>Cluster: </strong> {data?.cluster_name}
            <br />
            <strong>Namespace: </strong> {data?.namespace}
            <br />
            <br />
            {data?.typ === "child" && (
              <>
                <strong>Type: </strong> {data?.nw_type}
                <br />
              </>
            )}
          </>
        </div>
      </Container>
    </div>
  );
};

export default OnClickDetailModal;

export const Container = styled.div`
  min-width: 300px;
  max-width: 600px;
  min-height: 110px;
  background: #ffffff;
  position: absolute;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  border-left: 4px solid #637fbc;
  z-index: 100;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  .imgContainer {
    width: 40px;
    height: 40px;
    border: 2px solid #0003;
    border-radius: 50%;
    padding: 3px;
  }
  .header {
    color: #326ce5;
  }
  .custom-control {
    display: flex;
    align-item: center;
    padding: 2px 5px;
  }
  .containerContent {
    padding: 8px;
    line-height: 24px;
  }
  .desc {
    border-bottom: 3px solid #cddbfe;
  }
`;

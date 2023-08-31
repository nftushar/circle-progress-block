import { useEffect } from "react";

import Settings from "./Settings";
import Style from "./Style";
import CircleProgress from "./CircleProgress";

const Edit = (props) => {
  const { className, attributes, setAttributes, clientId } = props;

  useEffect(() => {
    clientId && setAttributes({ cId: clientId });
  }, [clientId, setAttributes]);

  return <>
    <Settings attributes={attributes} setAttributes={setAttributes} />

    <div className={className} id={`bBlocksCircleProgress-${clientId}`}>
      <Style attributes={attributes} clientId={clientId} />

      <CircleProgress attributes={attributes} clientId={clientId} />
    </div>
  </>;
};

export default Edit;

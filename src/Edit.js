import React, { useEffect } from "react";
import Settings from "./Settings";
import Style from "./Style";
import Rating from './CirclePeogress';


const Edit = (props) => {
  const { className, attributes, setAttributes, clientId } = props;


  useEffect(() => {
    clientId && setAttributes({ cId: clientId });
  }, [clientId, setAttributes]);

  return <>
    <Settings attributes={attributes} setAttributes={setAttributes} />

    <div className={className} id={`bBlocksRating-${clientId}`}>
      <Style attributes={attributes} clientId={clientId} />

      <Rating attributes={attributes} />
      </div>
  </>;
};

export default Edit;

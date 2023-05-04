const Box = props => {
  //  Write your code here.
  const {className,message}= props;
  return (
      <div className = {className}>
      <p className = "msg">{message}</p>

  );

};

const element = (
  //  Write your code here.
  <div className = "boxes-container">
  <h1 className = "heading">Boxes</h1>
  <div className = "box1"> 
  <Box className = "smallbox" message = "small"/>
  </div>
  <div className = "box2">
  <Box className = "mediumbox" message = "Medium"/>
  </div>
  <div className = "box3">
  <Box className = "largebox" message = "Large" />
  </div>
  </div>

)

ReactDOM.render(element, document.getElementById("root"));

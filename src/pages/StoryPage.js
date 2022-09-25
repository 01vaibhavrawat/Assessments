import { useState } from "react";
import pfp from "./photos/pfp.jfif";
import ReactReadMoreReadLess from "react-read-more-read-less";

const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum venenatis pulvinar. Proin vitae lectus urna. Sed erat ipsum, maximus a elit nec, condimentum placerat ex. Ut tincidunt mi eget condimentum mollis. Pellentesque aliquam velit quis est varius, sed molestie dolor ultrices. Pellentesque eget dapibus eros, at blandit arcu. Duis id purus quis mi porttitor viverra vel tempus elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos posuere";
const Story = (props) => {
  const [n, setN] = useState(0);
  return (
    <div id="story_body">
      <div id="header">
        <img id="pfp" src={pfp} alt="profile photo" />

        <div id="pfp-text">
          <p id="pfp-text-name">{props.data[n].name}</p>
          <p id="date">
            {props.data[n].date} <span>audio</span>
          </p>
        </div>
      </div>
      <ReactReadMoreReadLess
        charLimit={150}
        readMoreText={"Read more..."}
        readLessText={"Read less"}
        readMoreClassName="read-more-less--more"
        readLessClassName="read-more-less--less"
      >
        {longText}
      </ReactReadMoreReadLess>
	  
    </div>
  );
  //   const [n, setN] = useState(1);

  // return (
  //   <div id="story_body">
  //     <div id="story_body2">
  //       <div id="header">
  //         <img id="pfp" src={pfp} alt="profile photo" />

  //         <div id="pfp-text">
  //           <p id="pfp-text-name">{props.data[n].name}</p>
  //           <p id="date">
  //             {props.data[n].date} <span>audio</span>
  //           </p>
  //         </div>
  //       </div>

  //       <h1 className="title" data-selectable-paragraph>
  //         {props.data[n].title}
  //       </h1>

  //       <p className="text">{props.data[n].story}</p>

  //       {/* <button onClick={() => (n = 1 ? setN(0) : setN(1))}>change</button> */}
  // 	<button onClick={() => (n = 0 ? setN(1) : setN(0))}>change</button>
  //     </div>
  //   </div>
  // );
};

export default Story;

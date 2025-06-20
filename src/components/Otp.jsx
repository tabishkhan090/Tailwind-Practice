import { useRef,useState } from "react";
export function Otp({numOfBox}) {
  const ref = useRef(Array(numOfBox).fill(0));

  return (
    <div className="flex justify-center gap-2">
      {Array(numOfBox).fill(1).map((x,index) => <Box refrance={e=>ref.current[index]=e} key={index} onDone={()=>{
        if(index+1>=numOfBox)
          return;
        ref.current[index+1].focus();
      }}
      goBack={()=>{
        if(index==0)
          return;
        ref.current[index-1].focus();
      }}
      />)}
    </div>
  );
}

function Box({
  refrance,onDone,goBack
}){
  const [inputBoxVal, setInputBoxVal] = useState("");

  return <input value={inputBoxVal}
          ref={refrance}
          type="text"
          onChange={(e)=>
          {
            const val = e.target.value

            if (val == "1" || val == "2" || val == "3" || val == "4" || val == "5" || val == "6" || val == "7" || val == "8" || val  == "9") {
                setInputBoxVal(val);
                onDone()
            } else {
            }
          }}
          className=" bg-otp w-[35px] h-[50px] text-center text-xl rounded-xl outline-none text-white text-[15px]"
        />
}

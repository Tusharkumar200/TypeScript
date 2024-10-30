import { ReactNode } from "react";
// pass props and children to the component
// props type
type PropsType = {
    heading: string;
    count?: number;
    func1 :(a:number , b:number)=>void;
    children:ReactNode;
}

 function Box({heading,count, func1 ,children}:PropsType) {
    func1(5,8);
  return (
    <div>
        {heading}
        {count}
        {children}
    </div>
  )
}

export default Box;

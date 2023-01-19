import { useLocation } from "react-router-dom";
export default function DetailPage() {
  const location = useLocation();
  const proData = location.state;
  console.log(proData);
  return (
    <div>
      <h1>Detail page</h1>
      <img src={`../${proData.url}`} alt="" />
      <p>{proData.title}</p>
      <p>{proData.price}</p>
    </div>
  );
}

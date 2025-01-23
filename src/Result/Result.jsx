export default function Result({metric, imperial}){
   return (
    <>
      {Number(metric.cm) * Number(metric.kg)}
    </>
    
   )
}
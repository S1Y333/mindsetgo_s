import ResourceList from './ResourceList';
 import useFetch from './useFetch';

 const Resources = () => {
     const {data: resources, isPending, error} = useFetch('http://localhost:8000/resources');

     return ( 
         <div className="resources">
             {error && <div>{error}</div>}
             {isPending && <div>Loading...</div>}
             <ResourceList resources={resources} title="All Resources"/>
         </div>
      );
 }

 export default Resources; 
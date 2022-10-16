import "./propertyList.css";
import useFetch from "../../hooks/useFetch";
function PropertyList() {
  const { data, loading, error } = useFetch("/hotels/countByType");
  const imglink =
    "https://i.pinimg.com/originals/46/db/99/46db99be90a4cf5c4eda8e3414d3e09e.jpg";
  let data1 = [...data];
  return (
    <div className="pList">
      {loading
        ? "loading"
        : data1.map((item, i) => {
            return (
              <div className="pListItem">
                <img src={imglink} alt="" className="pListImg" />

                <div className="pListTitles">
                  <h1>{item.type}</h1>
                  <h2>{item.count}</h2>
                </div>
              </div>
            );
          })}
    </div>
  );
}
export default PropertyList;

import { fields, dimensionsFields } from "../../../data/productInfoFields";
const Details = ({ productDetails = {} }) => {
  return (
    <section className="space-y-4 details flex items-center gap-x-4">
      <ul className="bg-zinc-900 rounded-xl p-12 space-y-3">
        <h3>Details</h3>
        {/*  */}
        {fields.map((field) => {
          return (
            <li className="flex gap-x-2">
              <span>{field.label}</span> :{" "}
              <p>{productDetails[field.key] || "-"}</p>
            </li>
          );
        })}
      </ul>
      <div className="space-y-8">
        <ul className="bg-zinc-900 rounded-xl p-12 space-y-4">
          <h3>Dimensions</h3>
          <div className="flex gap-x-4">
            {dimensionsFields.map((field) => {
              return (
                <li className="flex gap-x-2">
                  <span>{field.label}</span> :{" "}
                  <p>{productDetails.dimensions?.[field.key] || "-"}</p>
                </li>
              );
            })}
          </div>
        </ul>
        <div className="bg-zinc-900 p-8 rounded-xl *:text-6xl *:font-semibold">
            <h4>{productDetails?.price}$</h4>
        </div>
      </div>
    </section>
  );
};
export default Details;

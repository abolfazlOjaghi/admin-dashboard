import { fields, dimensionsFields } from "../../../data/productInfoFields";
import { Info, Ruler} from "lucide-react";
const Details = ({ productDetails = {} }) => {
  return (
    <section className="space-y-4 details">
      <div className="dark:bg-zinc-900 bg-gray-50 rounded-2xl p-6 space-y-3">
        <h3 className="flex items-center gap-x-2 text-base font-semibold mb-2">
          <Info size={18} className="text-blue-600" />
          Details
        </h3>
        <ul className="space-y-2.5">
          {fields.map((field) => (
            <li key={field.id} className="flex justify-between gap-x-2 text-sm">
              <span className="text-gray-500 dark:text-gray-400 font-medium">
                {field.label}
              </span>
              <p className="font-semibold text-right">
                {productDetails[field.key] || "-"}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="dark:bg-zinc-900 bg-gray-50 rounded-2xl p-6 space-y-3">
        <h3 className="flex items-center gap-x-2 text-base font-semibold mb-2">
          <Ruler size={18} className="text-blue-600" />
          Dimensions
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {dimensionsFields.map((field) => (
            <div
              key={field.id}
              className="bg-white dark:bg-zinc-800 rounded-xl p-3 text-center space-y-0.5"
            >
              <p className="font-bold text-lg">
                {productDetails.dimensions?.[field.key] || "-"}
              </p>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {field.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Details;

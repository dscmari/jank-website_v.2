"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { submitWebsiteCheck } from "@/actions/submit-webiste-check-action";

type Inputs = {
  website: string;
  email: string;
  checkbox: boolean;
};

export default function WebsiteCheckForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      checkbox: false,
      website: "",
      email: "",
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => submitWebsiteCheck(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="my-4 lg:mb-0 flex flex-col gap-4"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 font-semibold lg:mt-4">
          <label htmlFor="website">
            Deine Website<span className="lg:text-custom-red">*</span>
          </label>
          <input
            type="text"
            className="rounded text-custom-black bg-slate-200 p-2 w-full"
            {...register("website", { required: true })}
          />
          {errors.website && (
            <span className="text-sm text-black lg:text-custom-red font-light">
              Bitte eine gültige URL angeben.
            </span>
          )}
        </div>
        <div className="flex flex-col gap-4 font-semibold">
          <label htmlFor="email">
            Deine Email-Adresse<span className="lg:text-custom-red">*</span>
          </label>
          <input
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+\.\S+$/,
            })}
            className="rounded text-custom-black bg-slate-200 p-2 w-full"
          />
          {errors.email && (
            <span className="text-sm text-black lg:text-custom-red font-light">
              Bitte eine gültige Mailadresse angeben.
            </span>
          )}
        </div>
      </div>
      <label className="cursor-pointer lg:mb-8">
        <div className="flex items-start gap-4 ">
          <input
            type="checkbox"
            className="min-w-6 cursor-pointer"
            {...register("checkbox", { required: true })}
          />
          <p className="text-xs !cursor-pointer">
            Ich stimme zu, dass meine Angaben aus diesem Formular zur
            Beantwortung meiner Anfrage erhoben und verarbeitet werden. Mehr
            Informationen in der Datenschutzerklärung. Die habe ich gelesen und
            akzeptiert.
          </p>
        </div>
        {errors.checkbox && (
          <span className="text-sm text-black lg:text-custom-red font-light mt-4 block">
            Bitte der Datenschutzvereinbarung der zustimmen.
          </span>
        )}
      </label>
      <div>
        <button
          type="submit"
          className="cursor-pointer leading-8 mt-4 px-4 py-2 text-center bg-custom-white lg:bg-custom-red text-custom-black lg:text-white rounded-xl w-full "
        >
          Website abschicken
        </button>
        <p className="text-xs text-center mt-4">
          Der Website Check ist komplett kostenlos
        </p>
      </div>
    </form>
  );
}

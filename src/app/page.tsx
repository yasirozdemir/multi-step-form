import Form from "@/components/Form";
import { FormProvider } from "@/providers";

export default function Home() {
  return (
    <FormProvider>
      <Form />
    </FormProvider>
  );
}

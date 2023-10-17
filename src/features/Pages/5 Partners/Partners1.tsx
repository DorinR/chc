import { useIntl } from "react-intl";

export const Partners1 = () => {
  const { formatMessage } = useIntl();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: formatMessage({ id: "partners1" }) }}
    ></div>
  );
};

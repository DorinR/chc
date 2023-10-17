import { useIntl } from "react-intl";

export const Partners4 = () => {
  const { formatMessage } = useIntl();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: formatMessage({ id: "partners4" }) }}
    ></div>
  );
};

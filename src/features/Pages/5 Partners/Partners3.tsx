import { useIntl } from "react-intl";

export const Partners3 = () => {
  const { formatMessage } = useIntl();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: formatMessage({ id: "partners3" }) }}
    ></div>
  );
};

import { useIntl } from "react-intl";

export const Partners2 = () => {
  const { formatMessage } = useIntl();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: formatMessage({ id: "partners2" }) }}
    ></div>
  );
};

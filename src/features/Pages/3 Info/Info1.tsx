import { useIntl } from "react-intl";

export const Info1 = () => {
  const { formatMessage } = useIntl();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: formatMessage({ id: "info1" }) }}
    ></div>
  );
};

import { useIntl } from "react-intl";

export const Info3 = () => {
  const { formatMessage } = useIntl();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: formatMessage({ id: "info3" }) }}
    ></div>
  );
};

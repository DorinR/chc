import { useIntl } from "react-intl";

export const Contact1 = () => {
  const { formatMessage } = useIntl();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: formatMessage({ id: "contacts1" }) }}
    ></div>
  );
};

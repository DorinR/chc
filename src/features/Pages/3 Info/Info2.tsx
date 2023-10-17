import { useIntl } from "react-intl";

export const Info2 = () => {
  const { formatMessage } = useIntl();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: formatMessage({ id: "info2" }) }}
    ></div>
  );
};

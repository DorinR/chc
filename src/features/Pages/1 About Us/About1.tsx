import { useIntl } from "react-intl";

export const About1 = () => {
  const { formatMessage } = useIntl();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: formatMessage({ id: "about1" }) }}
    ></div>
  );
};

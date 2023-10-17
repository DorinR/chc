import { useIntl } from "react-intl";

export const Project1 = () => {
  const { formatMessage } = useIntl();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: formatMessage({ id: "projects1" }) }}
    ></div>
  );
};

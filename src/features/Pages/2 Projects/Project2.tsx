import { useIntl } from "react-intl";

export const Project2 = () => {
  const { formatMessage } = useIntl();

  return (
    <div
      dangerouslySetInnerHTML={{ __html: formatMessage({ id: "projects2" }) }}
    ></div>
  );
};

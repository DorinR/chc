import { useIntl } from "react-intl";

export const Social1 = () => {
  const { formatMessage } = useIntl();

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: formatMessage({ id: "businessSports1" }),
      }}
    ></div>
  );
};

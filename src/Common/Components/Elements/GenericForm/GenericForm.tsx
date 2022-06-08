import FormCollapsible from "./FormSection/FormSection";
import FormObjectHandler from "./FormObjectHandler/FormObjectHandler";
import styles from "./GenericForm.module.css";

function GenericForm<entityType>(props: {
  title?: string;
  onSubmit: Function;
  onCancel: Function;
  columns?: string;
  propertyConfig?: {
    ignored?: (keyof entityType)[];
    required?: (keyof entityType)[];
  };
  footerConfig?: {
    IconClasses: { cancel?: string; submit?: string };
    hide?: boolean;
  };
  initialValues: entityType;
  sections?: {
    title: string;
    containedProperties?: [string];
    isOpen: boolean;
  }[];
  selectOptions: [string, [string]];
}) {
  return (
    <div className={styles.formWrapper}>
      <form
        id={"form" + (props.title ? props.title : "")}
        className={styles.genericForm}
        onSubmit={props.onSubmit()}
        style={{
          gridTemplateColumns: props.columns
            ? props.columns
            : "max-content auto",
        }}
      >
        {props.title ? (
          <h1 className={styles.formDivider}>{props.title}</h1>
        ) : null}

        <FormObjectHandler<entityType>
          propertyConfig={props.propertyConfig}
          initialValues={props.initialValues}
          selectOptions={props.selectOptions}
          sections={props.sections}
        />

        {props.sections?.map(
          (section: {
            title: string;
            containedProperties?: [string];
            isOpen: boolean;
          }) => {
            return (
              <FormCollapsible
                key={section.title}
                columns={props.columns}
                sectionTitle={section.title}
                isOpen={section.isOpen}
              >
                <FormObjectHandler
                  section={section}
                  initialValues={props.initialValues}
                  selectOptions={props.selectOptions}
                  propertyConfig={props.propertyConfig}
                />
              </FormCollapsible>
            );
          }
        )}
      </form>
      {props.footerConfig?.hide ? null : (
        <div className={styles.formFooter}>
          <input
            type="button"
            value="Cancel"
            className={`${styles.formButton} ${styles.cancelformButton} ${props.footerConfig?.IconClasses.cancel}`}
            onClick={props.onCancel()}
          ></input>
          <input
            type="submit"
            form={"form" + props.title}
            className={`${styles.formButton} ${styles.confirmformButton} ${props.footerConfig?.IconClasses.submit}`}
          />
        </div>
      )}
    </div>
  );
}
export default GenericForm;

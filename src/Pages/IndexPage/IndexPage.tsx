import styles from "./IndexPage.module.css";
import GenericForm from "../../Common/Components/Elements/GenericForm/GenericForm";

interface TestType {
  name: string;
  age: number;
  isAwesome: boolean;
  birthDate: Date;
  title: string;
  someelse: number[];
  descendants: {
    hamsters: number;
    dogs: number;
    subsub: { sublevel: boolean };
  };
}

export default function IndexPage() {
  return (
    <>
      <div className={styles.temptext}>
        <br />
        {"Hi, i'm Robert."}
        <br />
        <GenericForm<TestType>
          selectOptions={["someelse", ["test"]]}
          initialValues={{
            name: "Robert",
            age: 12,
            isAwesome: true,
            birthDate: new Date(),
            title: "test",
            someelse: [1, 2, 3, 4],
            descendants: { hamsters: 1, dogs: 2, subsub: { sublevel: true } },
          }}
          onSubmit={() => {}}
          onCancel={() => {}}
        ></GenericForm>
      </div>
    </>
  );
}

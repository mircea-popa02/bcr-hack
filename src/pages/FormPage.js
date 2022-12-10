import BasicForm from "../components/BasicForm";

const FormPage = (props) => {
  return <BasicForm pets={props.pets} onPetChange={props.setPets} />;
};

export default FormPage;

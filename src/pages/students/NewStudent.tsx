import * as Yup from "yup";
import { useNavigate } from 'react-router-dom'
import { Formik, Form } from "formik";
import { TextInput } from '../../components/TextInput';
import { Button } from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useStudent } from '../../hooks/useStudent';


export const NewStudent = () => {
  const navigate = useNavigate();
  const {createStudent} = useStudent();
  
  
  return (
    <>
      <button onClick={()=>navigate(-1)} className='backButton'><FontAwesomeIcon icon={faArrowLeft} /></button>
      <h3 className='title'>New Student</h3>
      <hr></hr>
      <Formik
        initialValues={{
          age:18,
          name: ''
        }}
        validationSchema= {Yup.object({
          age: Yup.number().required('Age is required').min(1,'Should be a valid age'),
          name: Yup.string().required('Name is required'),
        })}
        onSubmit={createStudent}
      >
        {
          (formik) => (
            <Form className="regular-form">
              <TextInput name="name" placeholder='Name' type="text" />
              <TextInput name="age" placeholder='Age' type="number" label="Age"/>
              <Button type="submit">Create</Button>
            </Form>
          )
        }
      </Formik>

    </>
  )
}

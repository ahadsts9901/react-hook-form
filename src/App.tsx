import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { TextField, Checkbox, FormControlLabel, Button } from '@mui/material';
import { useForm } from "react-hook-form"

const App = () => {

  const { register, handleSubmit }: any = useForm()

  const emailRegex = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/
  const passwordRegex = /^.{8,16}$/


  const login = (data: any) => {
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit(login)} >
        <TextField id="outlined-basic" label="Email" variant="outlined"
          {...register("email", {
            required: true,
            validate: {
              matchPattern: (value: any) => {
                emailRegex.test(value) || "Email is not valid"
              }
            }
          })}
        />
        <br />
        <br />
        <TextField id="outlined-basic" label="Password" variant="outlined"
          {...register("password", {
            required: true,
            validate: {
              matchPattern: (value: any) => {
                passwordRegex.test(value) || "Password is not valid"
              }
            }
          })}
        />
        <br />
        <br />
        <FormControlLabel
          {...register("checkbox1")}
          label="One"
          control={
            <Checkbox
            />
          }
        />
        <FormControlLabel
        {...register("checkbox2")}
          label="Two"
          control={
            <Checkbox
            />
          }
        />
        <FormControlLabel
        {...register("checkbox3")}
          label="Three"
          control={
            <Checkbox
            />
          }
        />
        <br />
        <br />
        <Button type='submit'>Login</Button>
      </form>
    </>
  )
}

export default App
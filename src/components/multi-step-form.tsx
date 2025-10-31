import { zodResolver } from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import { personalInfoSchema } from "../types"

const MultistepForm = () => {
   // custom hook


   useForm({
      // resolver: zodResolver()
   })
  return (
    <div>Multi step Form</div>
  )
}

export default MultistepForm
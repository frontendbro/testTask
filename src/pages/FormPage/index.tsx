import { useCallback, useState } from 'react'
import MyButton from '../../components/MyButton'
import styled from '@emotion/styled'
import MyInput from '../../components/MyInput'

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log('Form data:', formData)
    },
    [formData],
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <div>
      <h1>FormPage</h1>

      <form onSubmit={handleSubmit}>
        <MyInput
          cbOnChange={handleChange}
          value={formData.name}
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          label="Name:"
        />
        <MyInput
          cbOnChange={handleChange}
          value={formData.email}
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          label="Email:"
        />

        <WrapBtn>
          <MyButton variant="filled" type="submit" styleContainer={{ marginRight: '4px' }}>
            Submit filled
          </MyButton>
          <MyButton variant="outlined" type="submit">
            Submit outlined
          </MyButton>
        </WrapBtn>
      </form>
    </div>
  )
}

const WrapBtn = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`

export default FormPage

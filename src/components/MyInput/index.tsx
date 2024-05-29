import styled from '@emotion/styled'

interface MyInputProps {
  cbOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type: string
  value: string | number
  placeholder?: string
  name?: string
  id?: string
  label?: string
}

const MyInput = ({ cbOnChange, type, value, placeholder, name, id, label }: MyInputProps) => {
  return (
    <WrapInput>
      {label ? <Label htmlFor="email">{label}</Label> : null}
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => cbOnChange(e)}
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </WrapInput>
  )
}

const WrapInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

const Label = styled.label`
  cursor: pointer;
  align-self: flex-start;
  margin-bottom: 4px;
  color: #646464;
`

const Input = styled.input`
  padding: 8px;
  border: 2px solid #007bff;
  border-radius: 10px;
`

export default MyInput

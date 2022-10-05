import React from 'react'
import { FormControl, Input, useColorModeValue } from 'native-base'
import theme from '../../AppTheme'
import { IInputProps } from 'native-base/lib/typescript/components/primitives/Input/types'

export const InputField = (props: IInputProps): JSX.Element => {
  return (
    <FormControl w="100%">
      <Input
        w="100%"
        borderRadius="10"
        borderColor={useColorModeValue(
          theme.colors.primary.default,
          theme.colors.primary.light
        )}
        placeholderTextColor={useColorModeValue(
          theme.colors.primary.default,
          theme.colors.primary.light
        )}
        padding="12px"
        fontSize="16px"
        {...props}
      />
    </FormControl>
  )
}
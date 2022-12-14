import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'

import { isBlockActive } from '../../../utils/SlateUtilityFunctions.js'
import { insertLink } from '../../../utils/link.js'

const LinkButton = (props) => {
    const { editor } = props
    const handleInsertLink = () => {
        const url = prompt('Enter URL')
        insertLink(editor, url)
    }
    return (
        <Button
            active={isBlockActive(editor, 'link')}
            format={'link'}
            onClick={handleInsertLink}
        >
            <Icon icon="link" />
        </Button>
    )
}

export default LinkButton

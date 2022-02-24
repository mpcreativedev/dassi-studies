import { parse } from '@/utils'
import { JSONSchema7 } from 'json-schema'
import { IChangeEvent } from '@rjsf/core'
import DataViewer from '@/components/DataViewer/DataViewer'
import FormData from '@/components/FormData/FormData'

const Individuals: React.FC = () => {
  const [schema, setSchema] = useState<JSONSchema7>({})
  const [uiSchema, setUiSchema] = useState({})
  const [formData, setFormData] = useState(null)
  const [isFetched, setIsFetched] = useState(false)

  const onFormUpdate = useCallback(
    ({ formData }: IChangeEvent) => {
      setFormData(parse(formData))
    },
    [setFormData]
  )

  useEffect(() => {
    Promise.all([
      fetch(`/schema/individuals/schema.json`).then((resp) => resp.json()),
      fetch(`/schema/individuals/ui-schema.json`).then((resp) => resp.json()),
    ]).then(([schema, uiSchema]) => {
      setSchema(schema)
      setUiSchema(uiSchema)
      setIsFetched(true)
    })
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 md:col-8">
          {!isFetched ? (
            <div>Fetching...</div>
          ) : (
            <>
              <h1>Individuals</h1>
              <FormData
                schema={schema}
                uiSchema={uiSchema}
                formData={formData}
                onChange={onFormUpdate}
                onSubmit={onFormUpdate}
                onError={onFormUpdate}
              />
            </>
          )}
        </div>
        <div className="col-12 md:col-4">
          <DataViewer formData={formData} />
        </div>
      </div>
    </div>
  )
}

export default Individuals

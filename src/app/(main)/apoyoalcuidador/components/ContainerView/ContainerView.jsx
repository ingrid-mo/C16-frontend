import { PaginationView } from '@/app/(main)/components'
import { Tabs } from '..'
import { useResources } from '../../hooks'
import GenericBanner from '@/app/(main)/components/GenericBanner/GenericBanner'
import { Spinner } from '@/app/(dashboard)/dashboard/components'

const dataBanner = {
  imgUrl:
    'https://firebasestorage.googleapis.com/v0/b/c16-ronda.appspot.com/o/imagenes%2FimgApoyo.png?alt=media&token=5657a059-3dd9-4556-9b0a-f4d55410b6fa',
  titleMessage: 'Apoyo a las y los', //mensaje que va en el titulo
  titleEmphasis: 'Cuidadores', // el enfasis del texto que va color azul
  message: 'Revisa todo el material que tenemos disponible como datos y links de interés', //mensaje del banner
}

const ContainerView = () => {
  const {
    allResources,
    paginationOptions,
    page,
    handlePageChange,
    totalPages,
    isLoading,
  } = useResources()

  return (
    <main style={{ maxWidth: '1290px', margin: '0 auto' }}>
      <GenericBanner resource={dataBanner} />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Tabs />
          {allResources?.length > 0 && (
            <PaginationView
              paginationOptions={paginationOptions}
              currentPage={page}
              handlePageChange={handlePageChange}
              getTotalPages={() => totalPages}
            />
          )}
        </>
      )}
    </main>
  )
}

export default ContainerView

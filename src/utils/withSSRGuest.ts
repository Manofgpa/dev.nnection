import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next'
import { parseCookies } from 'nookies'
import React from 'react'

export const withSSRGuest = <P>(
  fn: GetServerSideProps<P>
): GetServerSideProps => {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx)

    if (cookies['devnnection.token']) {
      return {
        redirect: {
          destination: '/feed',
          permanent: false,
        },
      }
    }

    return await fn(ctx)
  }
}

import React from 'react'

import { useQuery, gql } from '@apollo/client'

const DEPARTMENTS = gql`
    query Departments {
        departments {
            data {
                attributes {
                    name
                    staff_details {
                    data {
                        attributes {
                        name
                        staff_id
                        email
                        roles
                        Photo {
                            data {
                            attributes {
                                url
                            }
                            }
                        }
                        }
                    }
                    }
                }
            }
        }
    }
`

export const StaffPhotos = () => {

    const { loading, error, data } = useQuery(DEPARTMENTS)

    if (loading) return <p>Loading...</p>
    // if (error) return <p>Error...</p>

    console.log(data)

    const { departments } = data

    return (
        departments.data.map((department, i) => {

            let data = [...department.attributes.staff_details.data]

            let data_sorted = data.sort((a, b) => (a.attributes.staff_id > b.attributes.staff_id) ? 1 : -1)

            return (
                <div key={i} className="container">
                    <h1>{department.attributes.name}</h1>
                    <div className="columns">
                        {data_sorted.map(staff => {

                            const roles = staff.attributes.roles.split(',')

                            return (
                                <div key={staff.attributes.staff_id} className="profileImages" >
                                    <img style={{width: "100%"}} src={`${process.env.REACT_APP_BACKEND}${staff.attributes.Photo.data.attributes.url}`} alt={staff.attributes.email} />
                                    <h2 style={{fontSize: "1.5rem"}}>{staff.attributes.name}</h2>
                                    <h3 style={{fontSize: "0.9rem"}}>{roles.map((role, r) => {
                                        return roles.length > 1 ? <div key={r}><p>{role}</p></div> : <div key={r}><p>{role}</p><p><br/></p></div>
                                    })}</h3>
                                    <h3 style={{fontSize: "0.9rem"}}>Email: <a href={`mailto:${staff.attributes.email}@hamiltonchristian.school.nz`}>{staff.attributes.name.split(' ')[0]}</a></h3>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        })
    )
}

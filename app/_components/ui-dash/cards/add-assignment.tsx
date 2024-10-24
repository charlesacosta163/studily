'use client'

import { 
    Card,
    CardHeader,
    CardDescription,
    CardTitle,
    CardContent
} from '@/app/_components/ui/card'
import { Input } from '@/app/_components/ui/input'
import { addAssignment } from '@/lib/actions'
import QuickAddBtn from '../items/quickaddbtn'

import { useState } from 'react'

const AddAssignmentCard = () => {
  const [date, setDate] = useState<string | null>()
  const [name, setName] = useState<string>('')
  return (
    <Card className='card w-full'>
          <CardHeader>
            <CardTitle>Quick Add</CardTitle>
            <CardDescription>
              Set the date for your assignments!
            </CardDescription>
          </CardHeader>

          { /* Add assignment functionality */ }
          <CardContent>

            <form className="flex flex-col" action={addAssignment}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Assignment Name
                </label>
                <Input
                  type="text"
                  name='assignment'
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter assignment name"
                  onChange={e => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4 self-start">
                <label className="block text-sm font-medium mb-1">
                  Due Date
                </label>
                <Input
                  type="date"
                  name='date'
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onChange={e => setDate(e.target.value)}
                  required
                />
              </div>
              <QuickAddBtn name={name} date={date?.toString() as any}/>
            </form>
          
          </CardContent>

        </Card>
  )
}

export default AddAssignmentCard
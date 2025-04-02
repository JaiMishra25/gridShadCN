import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from "../components/ui/button";
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Calendar, MoreHorizontal, Search, Phone, Mail, User, Users, Clock } from 'lucide-react';

const ReservationsGrid = () => {
  const reservations = [
    {
      id: '112345',
      name: 'John Doe',
      status: 'Pending',
      color: 'orange',
      checkIn: '01/01/2024',
      checkOut: '01/05/2024',
      email: 'john.doe@example.com',
      phone: '+1 234-567-890',
      bookingDate: '12/25/2023',
      docStatus: 'Received',
      docColor: 'green',
      guests: { adults: 2, children: 1, infants: 1 },
      total: '$500',
      due: '$200',
      dueColor: 'red'
    },
    {
      id: '112346',
      name: 'Jane Smith',
      status: 'Canceled',
      color: 'red',
      checkIn: '02/01/2024',
      checkOut: '02/03/2024',
      email: 'jane.smith@example.com',
      phone: '+1 987-654-321',
      bookingDate: '01/15/2024',
      docStatus: 'Pending',
      docColor: 'red',
      guests: { adults: 2, children: 1, infants: 1 },
      total: '$300',
      due: '$100',
      dueColor: 'red'
    },
    {
      id: 'TCBNWEFQ',
      name: 'Manoj',
      status: 'Confirmed',
      color: 'green',
      checkIn: '03/01/2024',
      checkOut: '03/03/2024',
      email: 'niks@live.in',
      phone: '+1 989 654 321',
      bookingDate: '02/15/2024',
      docStatus: 'Partial 1/2',
      docColor: 'amber',
      guests: { adults: 2, children: 1, infants: 1 },
      total: '$1300',
      due: '$100',
      dueColor: 'red'
    },
    {
      id: '212347',
      name: 'Robert Chen',
      status: 'Confirmed',
      color: 'green',
      checkIn: '01/10/2024',
      checkOut: '01/15/2024',
      email: 'robert.chen@example.com',
      phone: '+1 555-123-4567',
      bookingDate: '12/30/2023',
      docStatus: 'Received',
      docColor: 'green',
      guests: { adults: 2, children: 1, infants: 1 },
      total: '$750',
      due: '$0',
      dueColor: 'green'
    },
    {
      id: '212348',
      name: 'Sarah Johnson',
      status: 'Pending',
      color: 'orange',
      checkIn: '02/05/2024',
      checkOut: '02/07/2024',
      email: 'sarah.j@example.com',
      phone: '+1 555-987-6543',
      bookingDate: '01/20/2024',
      docStatus: 'Pending',
      docColor: 'red',
      guests: { adults: 2, children: 0, infants: 0 },
      total: '$400',
      due: '$400',
      dueColor: 'red'
    },
    {
      id: '212349',
      name: 'Michael Brown',
      status: 'Confirmed',
      color: 'green',
      checkIn: '01/20/2024',
      checkOut: '01/22/2024',
      email: 'm.brown@example.com',
      phone: '+1 555-789-0123',
      bookingDate: '01/05/2024',
      docStatus: 'Received',
      docColor: 'green',
      guests: { adults: 2, children: 0, infants: 0 },
      total: '$300',
      due: '$150',
      dueColor: 'red'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed': return 'bg-green-500 hover:bg-green-600';
      case 'Pending': return 'bg-orange-500 hover:bg-orange-600';
      case 'Canceled': return 'bg-red-500 hover:bg-red-600';
      default: return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  const getDocStatusColor = (status: string) => {
    if (status === 'Received') return 'bg-green-500 text-white';
    if (status === 'Pending') return 'bg-red-500 text-white';
    if (status.includes('Partial')) return 'bg-amber-500 text-white';
    return 'bg-gray-500 text-white';
  };

  const getDueColor = (due: string) => {
    if (due === '$0') return 'text-green-500';
    return 'text-red-500';
  };

  const getInitial = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  const getRandomColor = (name: string) => {
    const colors = ['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-teal-500'];
    return colors[name.length % colors.length];
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center px-4 py-2 border-b">
        <div className="flex items-center space-x-2">
          <Calendar className="h-5 w-5" />
          <h1 className="text-xl font-bold">Reservations</h1>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="flex items-center">
            Actions
          </Button>
          <Button variant="default" className="bg-blue-500 hover:bg-blue-600">
            Create
          </Button>
        </div>
      </div>
      
      <div className="flex items-center space-x-2 p-4 border-b">
        <div className="relative flex-1 max-w-xs">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input placeholder="Search" className="pl-8" />
        </div>
        <Select>
          <Button variant="outline" className="w-40">Communication</Button>
        </Select>
        <Select>
          <Button variant="outline" className="w-28">Status</Button>
        </Select>
        <Select>
          <Button variant="outline" className="w-28">Source</Button>
        </Select>
        <Select>
          <Button variant="outline" className="w-28">Payment</Button>
        </Select>
        <Button variant="outline" className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          Pick date range
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4 overflow-auto">
        {reservations.map((reservation) => (
          <Card key={reservation.id} className="border border-gray-200 overflow-hidden">
            <CardContent className="p-0">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-md flex items-center justify-center text-white font-semibold ${getRandomColor(reservation.name)}`}>
                    {getInitial(reservation.name)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{reservation.name}</span>
                      <Badge className={`${getStatusColor(reservation.status)} text-white`}>
                        {reservation.status}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                      Res. No: {reservation.id}
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4 p-4 border-b">
                <div>
                  <div className="text-sm text-gray-500">Check-in / Check-out</div>
                  <div className="font-medium">{reservation.checkIn} - {reservation.checkOut}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-medium truncate">{reservation.email}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">{reservation.phone}</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 p-4 border-b">
                <div>
                  <div className="text-sm text-gray-500">Booking Date</div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>{reservation.bookingDate}</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Doc(s)</div>
                  <Badge className={`${getDocStatusColor(reservation.docStatus)}`}>
                    {reservation.docStatus}
                  </Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 p-4 border-b">
                <div>
                  <div className="text-sm text-gray-500">Guests</div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{reservation.guests.adults}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{reservation.guests.children}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{reservation.guests.infants}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-4">
                <div>
                  <div className="text-sm text-gray-500">Total</div>
                  <div className="font-medium">{reservation.total}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Due</div>
                  <div className={`font-medium ${getDueColor(reservation.due)}`}>{reservation.due}</div>
                </div>
                <Button variant="outline" size="sm">
                  View Room
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReservationsGrid;
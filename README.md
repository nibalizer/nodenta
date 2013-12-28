nodenta
=======


A node app to consume REST calls and effect ZFS/NFS changes on the host system.


api endpoints
=============


list
----

Lists zfs filesystems.

    curl -H "Content-Type: application/json" http://127.0.0.1:3000/list

Example response:

    [
      {
        "name": "picombinator",
        "used": 201728,
        "avail": 983547510784,
        "refer": 32768,
        "mountpoint": "/picombinator"
      },
      {
        "name": "picombinator/nibalizer",
        "used": 64512,
        "avail": 983547510784,
        "refer": 32768,
        "mountpoint": "/picombinator/nibalizer"
      },
      {
        "name": "picombinator/nibalizer/science",
        "used": 31744,
        "avail": 10737418240,
        "refer": 31744,
        "mountpoint": "/picombinator/nibalizer/science"
      }

    ]


create
------

Creates zfs filesystems

    curl -d '{"filesystem": "picombinator/nibalizer/science"}' -H "Content-Type: application/json" http://127.0.0.1:3000/api/1/create


Example response:


    Creating zfs filesystem


destroy
-------

Destroys zfs filesystems

    curl -d '{"filesystem": "picombinator/nibalizer/test"}' -H "Content-Type: application/json" http://127.0.0.1:3000/api/1/destroy


Example response:


    Destroying zfs filesystem


get
---

Gets a property from a filesystem


    curl -d '{"filesystem": "picombinator/nibalizer/science", "property": "quota"}' -H "Content-Type: application/json" http://127.0.0.1:3000/api/1/get


Example response:


    {
      "name": "picombinator/nibalizer/science",
      "property": "quota",
      "value": "10737418240",
      "source": "local"
    }



set
---

Sets a property on a filesystem


    curl -d '{"filesystem": "picombinator/nibalizer/science", "property": "quota", "value": "10737418240"}' -H "Content-Type: application/json" http://127.0.0.1:3000/api/1/set

    
Example response


    No response






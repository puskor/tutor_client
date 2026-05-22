"use client"
import Tutor_card from './Tutor_card';
import EmptyCard from '../share/Empty';
import { Label, SearchField } from "@heroui/react";
import { useState } from 'react';

const All_tutors = ({ data }) => {

    const [search, setSearch] = useState("");

    const onclickChange = (e) => {
        setSearch(e.target.value);
    }

    const filteredData = data.filter((item) =>
        item.name?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='dark:text-black'>
            <SearchField name="search" className={"max-w-xl mx-auto my-2 border rounded-2xl "}>
                <Label></Label>
                <SearchField.Group>
                    <SearchField.SearchIcon />
                    <SearchField.Input onChange={onclickChange} className="w-[280px]" placeholder="Search..." />
                    <SearchField.ClearButton />
                </SearchField.Group>
            </SearchField>
            <div className='container mx-auto my-10'>
                {
                    filteredData.length > 0 ? <div className=' grid grid-cols-2 lg:grid-cols-3 gap-2'>
                        {(filteredData.map((item) => {
                            return <Tutor_card key={item._id} item={item} />
                        }))}
                    </div> : (<EmptyCard />)
                }
            </div>
        </div>
    );
};

export default All_tutors;


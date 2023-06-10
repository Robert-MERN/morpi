import React, { useState, } from 'react'
import TextField from '@mui/material/TextField';
import Chip from "@mui/material/Chip";
import Autocomplete from '@mui/material/Autocomplete';
import GroupsIcon from '@mui/icons-material/Groups';

const Autocomplete_Campaigns = ({ campaigns, selectedCampaigns, setSelectedCampaigns, selectedCampaignsOBJ, setselectedCampaignsOBJ, inputChange, check, error, onBlur, value, loading }) => {


    const handleSelect = (event, newValue) => {
        let emails = newValue[0].contacts;
        if (selectedCampaigns.some((each) => newValue[0].contacts.includes(each))) {
            emails = newValue[0].contacts.filter(each => !selectedCampaigns.includes(each))
        }
        if (emails.length) {
            setSelectedCampaigns([...selectedCampaigns, emails]);
        }
        setselectedCampaignsOBJ(newValue)
    };

    const handleDelete = (index) => {
        setselectedCampaignsOBJ((prev) => {
            const newValue = [...prev];
            newValue.splice(index, 1);
            return newValue;
        });
        setSelectedCampaigns((prev) => {
            const newValue = [...prev];
            newValue.splice(index, 1);
            return newValue;
        })
    };
    return (
        <Autocomplete
            className='w-full'
            id="size-small-filled-multi"
            multiple
            size="small"
            options={campaigns}
            getOptionLabel={(option) => option.title}
            filterSelectedOptions
            onChange={handleSelect}
            value={selectedCampaignsOBJ}
            onInputChange={inputChange}
            disabled={!check.campaigns}
            noOptionsText={loading ? "Loading..." : "No campaign..."}
            disableClearable
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip
                        variant="outlined"
                        label={option.title}
                        size="small"
                        {...getTagProps({ index })}
                        onDelete={() => handleDelete(index)}
                    />
                ))
            }
            renderOption={(props, option) =>
            (
                <div {...props}>
                    <GroupsIcon className=' mr-3 text-stone-500' />
                    {option.title}, {option.contacts.length} Member(s)
                </div>
            )
            }
            renderInput={(params) => (
                <TextField {...params}
                    error={error}
                    onBlur={onBlur}
                    label="Recepient(s) campaigns"
                    placeholder='Search...'
                />
            )} />
    )
}

export default Autocomplete_Campaigns
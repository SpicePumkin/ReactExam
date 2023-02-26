import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Typography, Stack, Button } from '@mui/material';
import Img from 'components/ui/img';
import * as Styled from './styled';
import { HouseModel } from 'models/house-model';

type HouseCardProps = HouseModel & {
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};

const HouseCard: React.FC<HouseCardProps> = ({
  id,
  title,
  location,
  images,
  price,
  rating,
  onDelete,
  onEdit,
}) => {
  const history = useHistory();

  const handleEditClick = () => {
    onEdit(id);
  };

  const handleDeleteClick = () => {
    onDelete(id);
  };

  return (
    <Stack sx={{ boxShadow: 4 }}>
      <Img src={images[0]} alt="" sx={{ aspectRatio: '1.42', width: 1 }} />
      <Styled.HouseCardContent>
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ float: 'right', textAlign: 'right' }}>
            <Box sx={{ fontSize: '1.3rem', color: 'primary.main', fontWeight: 600 }}>{price}</Box>
            <Styled.HouseCardRating>{rating}</Styled.HouseCardRating>
          </Box>

          <Typography sx={{ fontSize: '1.15rem', fontWeight: 500 }}>{title}</Typography>
          <Typography variant="subtitle2">{`${location.country}, ${location.city}`}</Typography>
        </Box>

        <Box>
          <Button color="primary" variant="contained" onClick={() => history.push(`/edit/${id}`)}>
            Edit
          </Button>
          <Button color="error" variant="contained" sx={{ ml: 1 }} onClick={handleDeleteClick}>
            Delete
          </Button>
        </Box>
      </Styled.HouseCardContent>
    </Stack>
  );
};

export default HouseCard;
